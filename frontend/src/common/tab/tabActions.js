export function selectTab(tabId) {
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e=> tabsToShow[e] = true)
}