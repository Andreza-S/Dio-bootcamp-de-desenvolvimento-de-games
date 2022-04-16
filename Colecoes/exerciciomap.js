function getAdmins(map){
    let admins = []
    for([key,value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins
}


const usuarios = new Map();
usuarios.set ('Ze', 'Admin');
usuarios.set ('Wand', 'Admin');
usuarios.set ('Sha', 'User');
usuarios.set ('Fran', 'Admin');

console.log(getAdmins(usuarios))