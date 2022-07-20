const fetchAbout = async (): Promise<string> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/dawsonbooth/dawsonbooth/master/README.md',
  )
  return response.text()
}

export default fetchAbout
