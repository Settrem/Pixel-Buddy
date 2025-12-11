import { customs } from "./buddyCustomizations";
import { isRGBArray } from "../utils/utils";

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
        clothesShoes: null,
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