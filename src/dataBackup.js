const data = { 
    users : [
        {
            id: 1,
            email: "joe@smith.com",
            password: "pass1"
        },
        {
            id: 2,
            email: "hikes@nps.org",
            password: "pass2"
        },
        {
            id: 3,
            email: "elCap@example.com",
            password: "pass3"
        }
    ],
    
    gear : [
        {
            id: 1,
            user_id: 1,
            name: "Crash pad",
            type: "rock climbing",
            notes: "Organic",
            weight: 14,
            unit: "oz"
        },
        {
            id: 2,
            user_id: 1,
            name: "Quickdraw",
            type: "rock climbing",
            notes: "Black Diamond",
            weight: 4,
            unit: "oz"
        },
        {
            id: 3,
            user_id: 1,
            name: "V Harness",
            type: "rock climbing",
            notes: "Black Diamond",
            weight: 16,
            unit: "oz"
        },
        {
            id: 4,
            user_id: 1,
            name: "Bear canister",
            type: "backpacking",
            notes: "REI",
            weight: 16,
            unit: "oz"
        },
        {
            id: 5,
            user_id: 1,
            name: "Tent",
            type: "backpacking",
            notes: "REI",
            weight: 3,
            unit: "lbs"
        }
    ],
    
    lists : [
        {
            id: 1,
            user_id: 1,
            name: "The Big Climb",
            description: "Going to go send that proj"
        },
        {
            id: 2,
            user_id: 2,
            name: "Mount Whitney",
            description: "Going to the top of the mountian"
        }
    ],
    
    
    gear_lists_lookup : [
        {
            id: 1,
            gear_id: 1,
            list_id: 1,
            user_id: 1
        },
        {
            id: 2,
            gear_id: 2,
            list_id: 1,
            user_id: 1
        },
        {
            id: 3,
            gear_id: 3,
            list_id: 1,
            user_id: 1
        },
        {
            id: 4,
            gear_id: 4,
            list_id: 2,
            user_id: 1
        },
        {
            id: 5,
            gear_id: 5,
            list_id: 2,
            user_id: 1
        }
    ]
    }
    
    export default data;