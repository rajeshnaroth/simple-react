// we'll use axios instead of getJson because there is no browser while unit testing

import axios from "axios"
import composeP from "ramda/src/composeP"
import toPromise from "../../utils/toPromise"

import {
  BASE_API_ENDPOINT,
  API_KEY,
  baseApiUrl,
  playlistsByUserIdUrl,
  playListsByChannelIdUrl,
  playListVideosUrl,
  videoUrl,
  parsePlaylistData,
  parsePlayListsDataToUrls,
  parseChannelIdDataToUrl,
  parseVideoDetails
} from "../youTube"

const logIt = toPromise((val) => {
  console.log(val)
  return val
})

// To test getJson, you must duplicate the functionality here..
const runAxios = async (input) => {
  const response = await axios(input.url)
  return Object.assign({}, input, response.data)
}
const getJson = toPromise(runAxios)

const getJsonForAllPlaylists = (playlists) => Promise.all(playlists.map((pl) => getJson(pl)))

test("end point is ok", () => {
  expect(BASE_API_ENDPOINT).toEqual("https://www.googleapis.com/youtube/v3/")
})

test("baseApiUrl() is ok", () => {
  expect(baseApiUrl("test")).toEqual(`${BASE_API_ENDPOINT}test?key=${API_KEY}`)
})

test("playlistsByUserIdUrl() is ok", () => {
  const id = "rnaroth"
  const result = playlistsByUserIdUrl(id)
  expect(result.input).toEqual(id)
  expect(result.url).toEqual(`${baseApiUrl("channels")}&forUsername=${id}&part=snippet`)
})

test("playListsByChannelIdUrl() is ok", () => {
  const id = "12345"
  const result = playListsByChannelIdUrl(id)
  expect(result.input).toEqual(id)
  expect(result.url).toEqual(`${baseApiUrl("playlists")}&channelId=${id}&part=snippet&maxResults=50`)
})

test("playListVideosUrl() is ok", () => {
  const id = "12345"
  const result = playListVideosUrl(id)
  expect(result.input).toEqual(id)
  expect(result.url).toEqual(
    `${baseApiUrl("playlistItems")}&playlistId=${id}&part=contentDetails,snippet&maxResults=50`
  )
})

test("videoUrl() is ok", () => {
  const id = "12345"
  const result = videoUrl(id)
  expect(result.input).toEqual(id)
  expect(result.url).toEqual(`${baseApiUrl("videos")}&id=${id}&part=contentDetails,snippet`)
})

// Sample channelId=UCaN3zPbfRjGXK-OukeZbjJQ
// Sample playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&
// Sample videoId hJX1vCk7amY

test("parseVideoDetails()", async () => {
  const id = "hJX1vCk7amY"
  const response = await axios(videoUrl(id).url)
  const videoDetails = await parseVideoDetails(response.data)
  expect(videoDetails.id).toEqual(id)
})

test("playListsByChannelIdUrl()", async () => {
  const channelId = "UCaN3zPbfRjGXK-OukeZbjJQ"
  const response = await axios(playListsByChannelIdUrl(channelId).url)
  //   console.log(response.data.items.length)
  expect(response.data.items).toBeDefined()
})

test("parsePlaylistData()", async () => {
  const channelId = "UCaN3zPbfRjGXK-OukeZbjJQ"
  const fetchPlaylistFromChannelByNameOrId = composeP(
    parsePlaylistData,
    getJsonForAllPlaylists,
    parsePlayListsDataToUrls,
    getJson,
    toPromise(playListsByChannelIdUrl)
  )
  const playlists = await fetchPlaylistFromChannelByNameOrId(channelId)
  console.log(playlists)
  expect(playlists.length).toEqual(3)
})
