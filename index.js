function getName(node) {
    return node.name
}

function headNode(address, collection) {
    return collection[address]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, address, collection) {
    let node = collection[address]
    for (let i = 0; i < index; i++) {
        node = collection[node.next]
    }
    return node
}

function addressAt(index, headAddy, collection) {
    if (index === 0) {
        return headAddy
    } else {
        return nodeAt(index - 1, headAddy, collection).next
    }
}

function indexAt(node, collection, headAddy) {
    let i = 0
    let pointer = collection[headAddy]
    while (pointer.next) {
        if (pointer.next === node.next) {
            return i
        } else {
            pointer = collection[pointer.next]
            i++
        }
    }
}

function insertNodeAt(index, newAddy, headAddy, collection) {
    const nodeBefore = nodeAt(index - 1, headAddy, collection)
    collection[newAddy].next = nodeBefore.next
    nodeBefore.next = newAddy
}

function deleteNodeAt(index, headAddy, collection) {
    const nodeBefore = nodeAt(index - 1, headAddy, collection)
    const nodeToRemove = nodeAt(index, headAddy, collection)
    nodeBefore.next = nodeToRemove.next
}