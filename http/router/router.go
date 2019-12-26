package router

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func StartHttp(address string) {
	e := echo.New()

	// Middleware
	e.Pre(middleware.AddTrailingSlash())
	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
	}))
	e.Static("/", "dist")
	e.File("/", "dist/index.html")
	e.File("/about", "dist/index.html")
	err := e.Start(address)
	if err != nil {
		panic(fmt.Sprintf("start http server error:\v", err))
	}else {
		fmt.Println("http start:%s", address)
	}
}
