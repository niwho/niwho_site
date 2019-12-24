package main // import "github.com/niwho/niwho_site"

import (
	"fmt"
	"github.com/niwho/niwho_site/http/router"
)

func main() {
	fmt.Println("vim-go")
	go func() { router.StartHttp(fmt.Sprintf(":%s", 8080)) }()

}
