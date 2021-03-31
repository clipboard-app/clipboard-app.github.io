








// used for manually generating the coordinates for the stars, later stored in "./css/stars.css"
function generateStars(count) {
    let min = [0, 0];
    let max = [1920, 1080];
    let ret = [];
    for (let i = 0; i < count; i++) {
        ret.push(`${min[0] + Math.floor(Math.random() * max[0])}px ${min[1] + Math.floor(Math.random() * max[1])}px #fff`);
    }
    return ret.join(', ').replace(/(,.+?,.+?,.+?,) (.+?)/g, '$1\n$2')
}