package main // import "github.com/niwho/niwho_site"

import (
	"fmt"
	"github.com/niwho/niwho_site/http/router"
	"github.com/niwho/logs"
	"os"
	"os/signal"
	"time"
)

func main() {
	fmt.Println("vim-go")
	logs.InitLog("./site.log", 6, 30)
	go func() { router.StartHttp(fmt.Sprintf(":%d", 8080)) }()

	listenToStop(nil)
}

func listenToStop(work func()) {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, os.Kill)
	timeout := time.Second * 5
	select {
	case <-c:
		logs.Log(logs.F{"step":"main stop service"}).Info("begin stop")

		go func() {
			if _, ok := <-time.After(timeout); ok {
				logs.Log(logs.F{"step":"main stop service"}).Warn("time out")
				os.Exit(-1)
			}
		}()
		if work != nil {
			work()
		}
		logs.Log(logs.F{"step": "main stop service"}).Info("stop success")
	}
}