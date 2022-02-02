/* PaginationHelper kata
https://www.codewars.com/kata/515bb423de843ea99400000a
*/

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length/this.itemsPerPage)
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  console.log(pageIndex, this.collection, this.itemsPerPage)
  if ((pageIndex)*this.itemsPerPage + this.itemsPerPage < this.collection.length) {
    return this.itemsPerPage;
  } else if(pageIndex*this.itemsPerPage > this.collection.length) {
    return -1;
  } 
  else {
    return -pageIndex*this.itemsPerPage + this.collection.length;
  }
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex > this.collection.length || itemIndex < 0 || this.collection.length === 0) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
}
