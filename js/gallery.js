import {select, selectAll, requireAllFromFolder} from './utils'

const imagesModel = requireAllFromFolder(require.context(
    '../images', false, /\.jpg/
))

const tileContainer = select('#gallery .tile-container')

const createTile = url => {
    const tile = document.createElement('div')
    const imgContainer = document.createElement('div')
    tile.setAttribute('class', 'tile')
    imgContainer.setAttribute('class', 'img-container')
    imgContainer.style.backgroundImage = `url(${url})`;
    tile.appendChild(imgContainer)
    return tile;
}

Object.keys(imagesModel).map(key => {
    const url = imagesModel[key]
    tileContainer.appendChild(createTile(url))
})
