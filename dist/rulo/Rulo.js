"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_process_1 = require("../ext/async_process");
var Rulo = /** @class */ (function () {
    function Rulo() {
    }
    // subscribe topic
    Rulo.changeRunMode = function (mode) {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!mode.match(/^(manual|normal)$/)) return [3 /*break*/, 2];
                        return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/command/mode std_msgs/String -- " + mode)];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('invalid argument value. give "normal" or "manual".');
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Rulo.setVelocity = function (velocity) {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 Rulo/cmd_vel geometry_msgs/Twist -- '[" + velocity + ", 0.0, 0.0]' '[0.0, 0.0, 0.0]'")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: has to be checked
    Rulo.drivePwm = function (percentage) {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 drivePwm rulo_msgs/DrivePwm --")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: has to be checked
    Rulo.setupBrush = function (side_brush, vacuum, main_brush, side_brush_clockwise, main_sbrush_dir) {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/command/brushes_cmd rulo_msgs/Brushes_cmd -- " + side_brush + " " + vacuum + " " + main_brush + " " + side_brush_clockwise + " " + main_sbrush_dir)];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.spinBrushMotor = function (side_brush, vacuum, main_brush) {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (side_brush || vacuum || main_brush < 0 || 100 < side_brush || vacuum || main_brush) {
                            console.log('invalid argument value. set the value between 0 ~ 100');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, async_process_1.exec("rostopic pub -1 /mobile_base/command/brushesPWM_cmd rulo_msgs/BrushesPWM_cmd -- " + side_brush + " " + vacuum + " " + main_brush)];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    // publish topic
    // TODO: below has to be all checked
    Rulo.bumperStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/bumper rulo_msgs/Bumper")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.dropWheel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/wheelDrop rulo_msgs/BooleanSensor")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.currentMode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/mode std_msgs/Int8")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.dropSensor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/cliff rulo_msgs/IRBumper")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.batteryStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/battery rulo_msgs/Battery")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.motorStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/drive rulo_msgs/Drive")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.checkSlip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/slip rulo_msgs/Slip")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.leftIR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/opt_left rulo_msgs/Range")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.rightIR = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/opt_right rulo_msgs/Range")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.brushStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/braches rulo_msgs/Brushes")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.detectGarbage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/dirt_detect rulo_msgs/DirtDetect")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.dustboxStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/dustbox rulo_msgs/BooleanSensor")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    Rulo.dustLevel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, async_process_1.exec("rostopic pub -1 mobile_base/event/dust std_msgs/Byte")];
                    case 1:
                        out = _a.sent();
                        console.log("stdout: " + out.out);
                        console.log("sterr: " + out.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Rulo;
}());
exports.default = Rulo;
//# sourceMappingURL=Rulo.js.map