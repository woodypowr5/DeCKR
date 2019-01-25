import { MainModule } from './modules/main.module';

const newApp = new MainModule();

setTimeout(function(){ 
    console.log("User Logging in (simulated)")
    newApp.login();
}, 3000);
