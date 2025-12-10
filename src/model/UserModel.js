import { isRGBArray } from "../lib/utils";

const ENERGY_LOSS_PER_HOUR = 2;

export const userModel = {
    user: null, //When logged in will hold uid and userName objects
    uiTheme: [84,92,158], //Blue
    buddyModel: {
        name: "MILOU",
        buddyType: null,
        clothesHat: null,
        clothesTop: null,
        clothesBottom: null,
        stats: {
            hunger: 100,
            happiness: 100,
            energy: 100,
        },
        lastTimeInteracted: null,
        
        addEnergyByTime() {
            const now = new Date();
            const last = this.lastTimeInteracted instanceof Date
                ? this.lastTimeInteracted
                : new Date();

            const diffMs = now - last;
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const energyloss = diffHours * ENERGY_LOSS_PER_HOUR;
            
            if(energyloss>0) {
                this.stats.energy = Math.max(0, this.stats.energy - energyloss);
                this.lastTimeInteracted = now;
            } 
        },
        
        energyLossAfterActivity(energyTaken){
            this.stats.energy -= energyTaken;
        },
    
        addHunger(hungerLevel){
            this.stats.hunger += hungerLevel;
        },
    
        addHappiness(funLevel){
            this.stats.happiness += funLevel;
        },
    },

    setUiThemeTo(rgb){
        isRGBArray(rgb);
        this.uiTheme = rgb;
    },
}