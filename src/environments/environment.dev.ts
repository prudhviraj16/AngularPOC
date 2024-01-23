export const environment = {
    homeAccess : true,
    homeAccessForRoles: { 
        admin: true,
        employee: true,
    },

    servicesAccess : true,
    servicesAccessForRoles: {
        admin : true,
        employee : false
    },

    contactAccess : true,
    contactAccessForRoles: {
        admin : true,
        employee : false
    },

    aboutAccess : true,
    aboutAccessForRoles: {
        admin : true,
        employee : true
    }
}