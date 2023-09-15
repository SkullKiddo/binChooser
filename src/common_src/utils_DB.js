export const matchesPath = "/matches"
export var matchImagesPath = null
export var matchImagesPath = null

export function createPathsFromMatchId(matchId){
    const matchImagesPath = matchesPath + "/" + matchId + "/images"
    const matchVotersPath = matchesPath + "/" + matchId + "/voters"
    return [matchImagesPath, matchVotersPath]
}