export default class Time{
    constructor(sec=0, min=0, hrs=0){
        this.min = Number.parseInt(min);
        this.sec = Number.parseInt(sec);
        this.hrs = Number.parseInt(hrs);
        if(this.sec>=60){
            while(this.sec>59){
                this.min++;
                this.sec -= 60;
            }
        }
        if(this.min>=60){
            while(this.min>59){
                this.hrs++;
                this.min -= 60;
            }
        }

        this.toSeconds = () =>{
            return this.hrs*60*60 + this.min*60 + this.sec;
        }
        this.getMinutes = () =>{
            return this.min;
        }
        this.getSeconds = () =>{
            return this.sec;
        }
        this.setMinutes = (min) =>{
            this.min = min;
            if(this.sec>=60){
                while(this.sec>59){
                    this.min++;
                    this.sec -= 60;
                }
            }
            if(this.min>=60){
                while(this.min>59){
                    this.hrs++;
                    this.min -= 60;
                }
            }
        }
        this.setSeconds = (sec) =>{
            this.sec = sec;
            if(this.sec>=60){
                while(this.sec>59){
                    this.min++;
                    this.sec -= 60;
                }
            }
            if(this.min>=60){
                while(this.min>59){
                    this.hrs++;
                    this.min -= 60;
                }
            }
        }
        this.setHours = (hrs) =>{
            this.hrs = hrs;
        }
        this.getHours = function(){
            return this.hrs;
        }

        this.compare = (time) =>{
            return this.toSeconds()-time.toSeconds()>0 ? 1 : -1;
        }
        this.toString24 = () =>{
            return this.hrs + ':'+this.min;
        }
        this.toFullString = () =>{
            return this.hrs + ':'+this.min+':'+this.sec;
        }
        this.toSecMinString = () =>{
            let mins = this.hrs*60 + this.min;
            return mins+':'+this.sec;
        }
        this.toString12 = () =>{
            if(this.hrs>12){
                if(this.min==0) return (this.hrs-12) +'PM';
                return (this.hrs-12) + ':'+this.min+'PM';
            }
            else{
                if(this.min==0) return (this.hrs) +'AM';
                return this.hrs + ':'+this.min+'AM';
            }
        }
        this.clone = () =>{
            return new Time(this.sec, this.min, this.hrs);
        }
        this.incrementSec = () =>{
            this.sec++;
            if(this.sec>=60){
                while(this.sec>59){
                    this.min++;
                    this.sec -= 60;
                }
            }
            if(this.min>=60){
                while(this.min>59){
                    this.hrs++;
                    this.min -= 60;
                }
            }
        }
        this.decrementSec = () =>{
            this.sec--;
            this.refactor();
        }
        this.refactor = () =>{
            if(this.sec>=60){
                while(this.sec>59){
                    this.min++;
                    this.sec -= 60;
                }
            }
            if(this.min>=60){
                while(this.min>59){
                    this.hrs++;
                    this.min -= 60;
                }
            }
            if(this.sec<0){
                while(this.sec<0){
                    this.min--;
                    this.sec += 60;
                }
            }
            if(this.min<0){
                while(this.min<0){
                    this.hrs--;
                    this.min += 60;
                }
            }
        }
    }
    static parse(timeString){
        let time = timeString.split(':');
        if(time.length==1) return null;
        if(time.length==2){
            return new Time(time[0], time[1], 0);
        }
        if(time.length==3){
            return new Time(time[0], time[1], time[2]);
        }
        if(time.length>3) return null;
    }
}