function generateButton(id) {
    const buttonName = id.replaceAll('_', ' ')
    return (`<a href="#" id="${id}" class="nav-link">${buttonName}</a>\n`)
}

function generateExecuteItemCode(id) {
    return (`<script src="js/examples/'${id}'.js"></script>\n`)
}

const items = [
'pojo',
'class',
'class_inheritance',
'class_super',
'static_methods',
'static_method_factory',
'static_properties_1',
'static_properties_2',
'getters',
'setters',
'private_properties',
'private_methods',
'promises',
'async_await',
'optional_chaining',
'nullish_coalescing'
]


let buttonsHtml = ''
items.forEach(item => {
    buttonsHtml += generateButton(item)
})
console.log(buttonsHtml)


const executeItem = 'getters'
const executeHtml = generateExecuteItemCode(executeItem)
console.log('--------------------------------')


const finalHtml = buttonsHtml + "\n" + executeHtml
console.log(finalHtml)
