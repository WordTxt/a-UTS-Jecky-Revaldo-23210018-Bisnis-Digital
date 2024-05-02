const scrollRevealConfig = {
    duration:2700,
    reset:true,
    origin:'left',
    distance:'150px'
}

const scrollRevealHandler = (className, config) => {
    ScrollReveal().reveal(className,config);
}

scrollRevealHandler
('.first' , {...scrollRevealConfig,delay:0});
scrollRevealHandler
('.second' , {...scrollRevealConfig,delay:0,origin:'right'});
scrollRevealHandler
('.third' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.history' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.programs' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.container' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.form-container' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.rector' , {...scrollRevealConfig,delay:0,});
scrollRevealHandler
('.fourth' , {...scrollRevealConfig,delay:0,origin:'right'});