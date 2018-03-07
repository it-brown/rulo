"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var Sample;
(function (Sample) {
    var rulo = /** @class */ (function () {
        function rulo() {
        }
        rulo.prototype.checkRunMode = function () {
            child_process.exec('rostopic pub -1 mobile_base/event/mode', function (error, stdout, stderr) {
                if (error) {
                    console.error("exec error: " + error);
                    return;
                }
                console.log("stdout: " + stdout);
                console.log("sterr: " + stderr);
            });
        };
        return rulo;
    }());
    Sample.rulo = rulo;
    child_process.exec('ls -l', function (error, stdout, stderr) {
        if (error instanceof Error) {
            console.error("error: " + error);
            console.log('exec Error *******');
        }
        else {
            console.log("stdout: " + stdout);
            console.log('exec Success!');
        }
    });
})(Sample || (Sample = {}));
//# sourceMappingURL=run_rulo.js.map