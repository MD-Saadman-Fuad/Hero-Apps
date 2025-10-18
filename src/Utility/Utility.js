const getInstalledApps = () => {
    const installedApps = localStorage.getItem('installedApps');
    if (installedApps) {
        const storedAppData = JSON.parse(installedApps);
        return storedAppData;
    }else{
        return [];
    }
}



const addToStoreDB = (id) =>{
    const installedApps = getInstalledApps();
    if(!installedApps.includes(id)){
        installedApps.push(id);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        console.log('App installed successfully');
    }else{
        alert('App is already installed');
    }
}

const removeFromStoreDB = (id) => {
    const installedApps = getInstalledApps();
    const idx = installedApps.findIndex(a => a == id);
    if (idx !== -1) {
        installedApps.splice(idx, 1);
        localStorage.setItem('installedApps', JSON.stringify(installedApps));
        console.log('App removed from storeDB');
        return true;
    } else {
        console.warn('App id not found in storeDB');
        return false;
    }
}

/**
 * sortApps - beginner-friendly sorter for the apps list
 *
 * Examples:
 *   sortApps(apps, 'most downloaded', 'descending')
 *   sortApps(apps, 'rating', 'asc')
 *
 * Accepted keys (case-insensitive):
 *  - 'downloads', 'most downloaded'
 *  - 'rating', 'highest rated'
 *  - 'size', 'smallest size'
 *
 * Accepted orders (case-insensitive): 'asc', 'ascending', 'desc', 'descending'
 *
 * Returns a new array (does not mutate the input).
 */
const sortApps = (apps = [], key = 'downloads', order = 'desc') => {
    const copy = Array.isArray(apps) ? apps.slice() : [];
    const k = (String(key || '').trim().toLowerCase());
    const o = (String(order || 'desc').trim().toLowerCase());

    const keyMap = {
        'downloads': 'downloads',
        'most downloaded': 'downloads',
        'most-downloaded': 'downloads',
        'rating': 'rating',
        'highest rated': 'rating',
        'highestrated': 'rating',
        'size': 'size',
        'smallest size': 'size',
        'smallest-size': 'size'
    };

    const orderMap = {
        'asc': 'asc',
        'ascending': 'asc',
        'desc': 'desc',
        'descending': 'desc'
    };

    const normalizedKey = keyMap[k] || 'downloads';
    const normalizedOrder = orderMap[o] || 'desc';

    const mapper = {
        downloads: (a) => Number(a.downloads) || 0,
        rating: (a) => Number(a.ratingAvg) || 0,
        size: (a) => Number(a.size) || 0,
    };

    const fn = mapper[normalizedKey] || mapper.downloads;
    copy.sort((a, b) => {
        const va = fn(a);
        const vb = fn(b);
        if (va === vb) return 0;
        return normalizedOrder === 'asc' ? va - vb : vb - va;
    });
    return copy;
}

export {getInstalledApps, addToStoreDB, removeFromStoreDB, sortApps};