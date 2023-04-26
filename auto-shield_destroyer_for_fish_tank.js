w.setFlushInterval(0);

menu.addOption("clean", () =>
{
    var sel = RegionSelection();
    sel.init();
    sel.onselection( (coords1, coords2, width, height) =>
    {
        var x1 = coords1[0] * 16 + coords1[2];
        var y1 = coords1[1] * 8 + coords1[3];
        var x2 = coords2[0] * 16 + coords2[2];
        var y2 = coords2[1] * 8 + coords2[3];
        
        // start loop to replace every 100 milliseconds
        var intervalID = setInterval(function() {
            for (var x = x1; x <= x2; x++) {
                for (var y = y1; y <= y2; y++) {
                    var info = getCharInfoXY(x, y);
                    if (info.char !== "🛡") continue;
                    
                    // replace the character to the left of 🛡 with 🔪
                    writeCharToXY("🔪", 0x000000, x-1, y);
                }
            }
        }, 100);

    });
    sel.startSelection();
});

