package constructor

import "fmt"

type Work struct {
	opts options
}
type options struct {
	startTime string
	lunchTime string
	endTime   string
}

var (
	lunTimeDefault = "中午十二点"
)

type Option func(o *options)

func StartTime(s string) Option {
	return func(opts *options) {
		opts.startTime = s
	}
}

func EndTime(s string) Option {
	return func(opts *options) {
		opts.endTime = s
	}
}

func NewWork(opts ...Option) *Work {
	workOptions := options{}
	for _, opt := range opts {
		opt(&workOptions)
	}
	work := new(Work)
	work.opts = workOptions
	if work.opts.lunchTime == "" {
		work.opts.lunchTime = lunTimeDefault
	}
	return work
}

func main() {
	commonOpts := []Option{
		StartTime("九点半"),
		EndTime("二十点"),
	}

	work := NewWork(commonOpts...)
	fmt.Printf("%+v", work.opts)
}
