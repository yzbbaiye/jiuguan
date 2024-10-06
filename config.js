/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "",
    "CookieArray": [
        "claude-3-5-sonnet-20240620@sessionKey=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","sessionKey=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"
    ],
    "WastedCookie": [
        "Null@sessionKey=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"
    ],
    "unknownModels": [],
    "Cookiecounter": 3,
    "CookieIndex": 0,
    "ProxyPassword": "",
    "Ip": "127.0.0.1",
    "Port": 8544,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "",
    "api_rProxy": "",
    "placeholder_token": "",
    "placeholder_byte": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": true,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": true,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": "1000,1000,15000",
        "xmlPlot": true,
        "SkipRestricted": false,
        "Artifacts": false,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */