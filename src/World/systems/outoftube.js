

function createOutOfTube() {

    

    const oftube = document.getElementById("out_in_space").addEventListener("change", function() {
        console.log(this.value);
        if (this.value == 100) {
            console.log('You out of space!!!');
            document.getElementById("inspace").style.display = "none";
            //scene.remove(human);
            //loop.stop(human);
            //scene.remove(tube);

        } else {
             console.log('Push harder!');
        }
    });
    

    return oftube;
}

export { createOutOfTube};

