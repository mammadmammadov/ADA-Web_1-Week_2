function mostFrequent(arr , n){
    let maxCnt = 0;
    let mostRepeatedElement = 0;
    for(let i=0; i<n; i++){
        let cnt = 0;
        for(let j=0; j<n; j++){
            if(arr[j]==arr[i]){
                cnt++;
            }
        }
        if(cnt>maxCnt){
            maxCnt = cnt;
            mostRepeatedElement = arr[i];
        }
    }
    return mostRepeatedElement;
}

function leastFrequent(arr , n){
    let minCnt = 999999;
    let leastRepeatedElement = 0;
    for(let i=0; i<n; i++){
        let cnt = 0;
        for(let j=0; j<n; j++){
            if(arr[j]==arr[i]){
                cnt++;
            }
        }
        if(cnt<minCnt){
            minCnt = cnt;
            leastRepeatedElement = arr[i];
        }
    }
    return leastRepeatedElement;
}