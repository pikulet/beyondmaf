const Card = require("../../Card");
const { PRIORITY_ARMOR_GIVER } = require("../../const/Priority");

module.exports = class ArmorGiver extends Card {

    constructor(role) {
        super(role);

        this.meetings = {
            "Give Armor": {
                states: ["Night"],
                flags: ["voting"],
                action: {
                    labels: ["giveItem", "armor"],
                    priority: PRIORITY_ARMOR_GIVER,
                    run: function () {
                        this.target.holdItem("Armor");
                        this.target.queueAlert("You have received armor!");
                    }
                }
            }
        };
    }

}
