'use strict';
export default class players {
    player = (playerName, cardDetails) => {
        return  {
            "players": {
                "player": [{
                    "name": playerName,
                    "cards": cardDetails
                }]
            }
        }
    }
}