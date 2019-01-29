export default {
  findById (list, id) {
    return list.find(item => item.id === id)
  }
}
