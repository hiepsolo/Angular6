"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (username) {
        request.get('https://api.github.com/users/' + username, function (error, response, body) {
            console.log(error);
            console.log(response);
            console.log(body);
        });
    };
    GithubApiService.prototype.getRepos = function () { };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
