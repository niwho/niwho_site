#!/bin/bash

CURDIR=$(cd `dirname $0`; pwd)
if [ "X$1" != "X" ]; then
    RUNTIME_ROOT=$(cd $1; pwd)
else
    RUNTIME_ROOT=${CURDIR}
fi

if [ "X$RUNTIME_ROOT" == "X" ]; then
    echo "There is no RUNTIME_ROOT support."
    echo "Usage: ./bootstrap.sh $RUNTIME_ROOT"
    exit -1
fi
PORT=$2

if [ "$IS_HOST_NETWORK" == "1" ]; then
     PORT=$PORT0
fi

if [ "X$PORT" == "X" ]; then
    PORT="0"
fi

RUNTIME_CONF_ROOT=$RUNTIME_ROOT/conf
RUNTIME_LOG_ROOT=$RUNTIME_ROOT/log

# 服务日志路径: $RUNTIME_LOG_ROOT/app/${svc_name}.log
if [ ! -d $RUNTIME_LOG_ROOT/app ]; then
    mkdir -p "${RUNTIME_LOG_ROOT}/app"
fi

# RPC日志路径：$RUNTIME_LOG_ROOT/rpc/go_rpc.log
if [ ! -d $RUNTIME_LOG_ROOT/rpc ]; then
    mkdir -p "${RUNTIME_LOG_ROOT}/rpc"
fi

if [ ! -f $CURDIR/settings.py ]; then
    echo "there is no settings.py exist."
    exit -1
fi


PRODUCT=$(cd $CURDIR; python -c "import settings; print settings.PRODUCT")
SUBSYS=$(cd $CURDIR; python -c "import settings; print settings.SUBSYS")
MODULE=$(cd $CURDIR; python -c "import settings; print settings.MODULE")
if [ -z "$PRODUCT" ] || [ -z "$SUBSYS" ] || [ -z "$MODULE" ]; then
    echo "Support PRODUCT SUBSYS MODULE PORT in settings.py"
    exit -1
fi

STDOUT_LOG_FILE=$RUNTIME_LOG_ROOT/${PRODUCT}_${SUBSYS}_${MODULE}.std.log

SVC_NAME=${PRODUCT}.${SUBSYS}.${MODULE}
BIN_NAME=${PRODUCT}_${SUBSYS}_${MODULE}

CONF_FILE=$CURDIR/conf/${PRODUCT}_${SUBSYS}_${MODULE}.yml
CONSULE="consul.rightpaddle.cn"
###debug
#CONF_FILE=$CURDIR/conf/${PRODUCT}_${SUBSYS}_${MODULE}_test.yml
if [ "$STRATEGY_ENV" == "test" ]; then
    CONF_FILE=$CURDIR/conf/${PRODUCT}_${SUBSYS}_${MODULE}_test.yml
    CONSULE="172.17.0.139:8088"
fi
RPC_CONF_DIR=$RUNTIME_CONF_ROOT
LOG_DIR=$RUNTIME_LOG_ROOT

export GOGC=300


# real exec
echo $CURDIR/bin/$BIN_NAME  --conf="$CONF_FILE" --rpc="$RPC_CONF_DIR" --log="$LOG_DIR" --svc="$SVC_NAME" --consule="$CONSULE" --port="${PORT}"
if [ "$STRATEGY_ENV" == "test" ]; then
    exec $CURDIR/bin/$BIN_NAME  --conf="$CONF_FILE" --rpc="$RPC_CONF_DIR" --log="$LOG_DIR" --svc="$SVC_NAME" --consule="$CONSULE" --port="${PORT}"
else
    exec $CURDIR/bin/$BIN_NAME  --conf="$CONF_FILE" --rpc="$RPC_CONF_DIR" --log="$LOG_DIR" --svc="$SVC_NAME" --consule="$CONSULE" --port="${PORT}"
fi
