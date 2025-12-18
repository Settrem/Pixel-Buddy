import { customs } from "./buddyCustomizations";
import { isRGBArray } from "../utils/utils";

const ENERGY_GAIN_PER_HOUR = 10;
const HUNGER_GAIN_PER_HOUR = 2;
const HAPPINESS_LOST_PER_HOUR = 3;

export const userModel = {
    user: null, //When logged in will hold uid and userName objects
    uiTheme: [84,92,158], //Blue
    buddyModel: {
        name: "MILOU",
        buddyType: null,
        clothesHat: null,
        clothesTop: null,
        clothesBottom: null,
        clothesShoes: null,
        stats: {
            hunger: 100,
            happiness: 100,
            energy: 100,
        },
        lastTimeInteracted: null,

        statChangeOverTime(){
            const now = new Date();
            const last = this.lastTimeInteracted;
            this.addEnergyByTime(now, last)
            this.looseHungerAndHappinessByTime(now, last)
            this.lastTimeInteracted = new Date();
        },
        
        addEnergyByTime(currentTime, lastTime) {
            console.log(lastTime);
            const diffMs = currentTime - lastTime;
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const energygain = diffHours * ENERGY_GAIN_PER_HOUR;
            
            if(energygain>0) {
                this.stats.energy = Math.max(0, this.stats.energy + energygain);
                if(this.stats.energy > 100) this.stats.energy = 100; 
            }
        },

        looseHungerAndHappinessByTime(currentTime, lastTime) {
            console.log(lastTime);
            const diffMs = currentTime - lastTime;
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
            const hungerGained = diffHours * HUNGER_GAIN_PER_HOUR;
            const happinessLost = diffHours * HAPPINESS_LOST_PER_HOUR;
            
            if(hungerGained>0) {
                this.stats.hunger = Math.max(0, this.stats.hunger - hungerGained);
                if(this.stats.hunger > 100) this.stats.hunger = 100; 
            }
            if(happinessLost>0) {
                this.stats.happiness = Math.max(0, this.stats.happiness - happinessLost);
                if(this.stats.happiness > 100) this.stats.happiness = 100; 
            }
        },
        
        energyLossAfterActivity(energyTaken){
            this.stats.energy -= energyTaken;
            this.lastTimeInteracted = new Date();
        },
    
        addHunger(hungerLevel){
            this.stats.hunger += hungerLevel;
            this.lastTimeInteracted = new Date();
        },
    
        addHappiness(funLevel){
            this.stats.happiness += funLevel;
            this.lastTimeInteracted = new Date();
        },

        changeClothes(type, value){
            const validTypes = ["buddyType", "clothesHat", "clothesTop", "clothesBottom", "clothesShoes"]
            if(!validTypes.includes(type)) return;
            this[type] += value;
            if (this[type] > customs[type].length - 1) this[type] = 0;
            if (this[type] < 0) this[type] = customs[type].length - 1;
        }
    },

    setUiThemeTo(rgb){
        isRGBArray(rgb);
        this.uiTheme = rgb;
    },
}