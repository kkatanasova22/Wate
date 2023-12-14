import '../styles/continentInfo.css';
document.addEventListener('DOMContentLoaded', function() {
    function updateContinentInfo(selectedContinent) {
        const changesText = document.getElementById('changesText');
        const impactText = document.getElementById('impactText');
        const bold = document.getElementById('bold');
        const continentMap = document.getElementById('continentMap');

        if (selectedContinent) {
            if (selectedContinent === 'southAmerica') {
                changesText.textContent = "The Amazon rainforest, a vital carbon sink, is at risk due to higher temperatures and changing rainfall patterns. Glacial retreat in the Andes affects water supply for downstream communities.";
                impactText.textContent = "Increased frequency of extreme weather events, such as floods and droughts, poses risks to agriculture and ecosystems.";
                bold.textContent = "South America";
                continentMap.src = '../images/southAmericaMap.png';
            } else if (selectedContinent === 'northAmerica') {
                bold.textContent = "North America";
                changesText.textContent = "Rising temperatures have been observed, leading to more frequent and intense heatwaves. There are also concerns about changing precipitation patterns, with some regions experiencing increased drought conditions.";
                impactText.textContent = "Melting glaciers in Alaska and reduced snowpack in the western U.S. affect water resources. Rising sea levels threaten coastal areas like Florida.";
                continentMap.src = '../images/northAmericaMap.png';
            } else if (selectedContinent === 'europe') {
                bold.textContent = "Europe";
                changesText.textContent = "Warming temperatures are affecting ecosystems, with changes in the distribution of plant and animal species. Sea levels are rising, impacting low-lying coastal areas.";
                impactText.textContent = "Shifts in agricultural productivity, increased heat-related health issues, and more frequent extreme weather events are notable concerns.";
                continentMap.src = '../images/europeMap.png';
            } else if (selectedContinent === 'asia') {
                bold.textContent = "Asia";
                changesText.textContent = "The Himalayan glaciers are melting, impacting water resources for millions of people in the region. Changes in monsoon patterns affect agriculture.";
                impactText.textContent = "Rising sea levels threaten densely populated coastal areas, and there are concerns about more intense cyclones in regions like Southeast Asia.";
                continentMap.src = '../images/asiaMap.png';
            }
            else if (selectedContinent === 'africa') {
                bold.textContent = "Africa";
                changesText.textContent = "Increased temperatures and changing rainfall patterns affect agriculture, water availability, and food security. Desertification poses a threat to many regions.";
                impactText.textContent = "Vulnerability to droughts and heatwaves, affecting both rural and urban populations. Shifts in disease patterns may also occur.";
                continentMap.src = '../images/africaMap.png';
            }
            else if (selectedContinent === 'australia') {
                bold.textContent = "Australia";
                changesText.textContent = "Use public transportation, cycle, or walk instead of relying on personal vehicles. Embrace a circular economy by reducing, reusing, and recycling.";
                impactText.textContent = "Engage in community gardens, promote local and sustainable food production, and support renewable energy initiatives. Advocate for stronger environmental regulations.";
                continentMap.src = '../images/australiaMap.png';
            }
            else if (selectedContinent === 'antarctica') {
                bold.textContent = "Antarctica";
                changesText.textContent = "Warming temperatures contribute to the melting of Antarctic ice shelves and glaciers, leading to rising sea levels globally.";
                impactText.textContent = "Accelerated ice loss contributes to sea-level rise, impacting coastal regions worldwide. Changes in ecosystems affect wildlife, particularly penguins and seals.";
                continentMap.src = '../images/antarcticaMap.png';
            }
        }
    }
    function handleContinentSelection() {
        document.querySelectorAll('[data-continent-id]').forEach(continent => {
            continent.addEventListener('click', function() {
                const selectedContinent = continent.getAttribute('id');
                localStorage.setItem('selectedContinent', selectedContinent);
                console.log(`Selected continent ID: ${selectedContinent}`);
                updateContinentInfo(selectedContinent);
            });
        });
    }
    function resetLocalStorage() {
        localStorage.removeItem('selectedContinent');
    }
    const selectedContinent = localStorage.getItem('selectedContinent');
    updateContinentInfo(selectedContinent);
    handleContinentSelection();
    window.addEventListener('focus', resetLocalStorage);
});