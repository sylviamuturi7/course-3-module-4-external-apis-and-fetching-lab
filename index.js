const weatherApi = "https://api.weather.gov/alerts/active?area="

document.getElementById('fetch-alerts').addEventListener('click', async function() {
  const input = document.getElementById('state-input')
  const display = document.getElementById('alerts-display')
  const error = document.getElementById('error-message')
  
  const state = input.value
  input.value = ''
  
  try {
    const response = await fetch(weatherApi + state)
    const data = await response.json()
    
    error.textContent = ''
    error.classList.add('hidden')
    
    display.innerHTML = data.title + ': ' + data.features.length
    data.features.forEach(function(alert) {
      const p = document.createElement('p')
      p.textContent = alert.properties.headline
      display.appendChild(p)
    })
  } catch (e) {
    error.textContent = e.message
    error.classList.remove('hidden')
  }
})