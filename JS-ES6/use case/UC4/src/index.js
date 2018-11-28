//quiz

const video = {
    genere : 'Sci fi',
    list: ['a', 'b', 'c'],
    findMovies(){
        var self = this;
        this.list.forEach(function(movie,index){
            console.log(self.genere);
            console.log(movie)
        });
    }
}

video.findMovies();

const video2 = {
    genere : 'Sci fi',
    list: ['a', 'b', 'c'],
    findMovies(){
        this.list.forEach((movie, index) => {
            console.log(this.genere, movie);
        });
    }
}

video2.findMovies();
