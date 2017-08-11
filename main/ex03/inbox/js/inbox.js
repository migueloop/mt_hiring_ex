/*! © MailTrack.io - 2014-05-15 */ ! function(a, b) {
  "use strict";

  function c(b) {
    b.insertRandomElements(), b.removeRandomElements(), b.updateStats(), a.setTimeout(c, f(1e3, 5e3), b)
  }

  function d(a) {
    b.querySelector(".username .name").innerText = a.name, b.querySelector(".username .email").innerText = a.email
  }

  function e() {
    var e, f, j, k, l;
    k = b.querySelector(".table tbody"), l = b.querySelector(".stats"), j = new h(a.randomData), e = new i, e.generateRandom(j), d(e), f = new g(j, k, l, e), c(f)
  }
  var f, g, h, i;
  f = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
  }, i = function(a, b, c) {
    this.name = a, this.surname = b, this.email = c
  }, i.prototype.generateRandom = function(a) {
    this.name = a.randomName(), this.surname = a.randomSurname(), this.email = a.randomEmail(this.name, this.surname)
  }, h = function(a) {
    this.surname = a.surname, this.name = a.name, this.domain = a.domain, this.lorem = a.lorem
  }, h.prototype.randomName = function() {
    var a;
    return a = f(0, this.name.length - 1), this.name[a]
  }, h.prototype.randomSurname = function() {
    var a;
    return a = f(0, this.surname.length - 1), this.surname[a]
  }, h.prototype.randomEmail = function(a, b) {
    var c;
    return c = f(0, this.domain.length - 1), a.toLowerCase() + "." + b.toLowerCase() + "@" + this.domain[c]
  }, h.prototype.randomLorem = function() {
    var a;
    return a = f(0, this.lorem.length - 1), this.lorem[a]
  }, g = function(a, b, c, d) {
    this.elements = [], this.container = b, this.stats = c, this.random = a, this.user = d
  }, g.prototype.updateStats = function() {
    this.stats.querySelector(".num-rows").innerText = this.elements.length, this.stats.querySelector(".last-update").innerText = new Date
  }, g.prototype.createEmail = function(a, c, d) {
    var e, f, g, h;
    return void 0 === a && (a = this.random.randomName()), void 0 === c && (c = this.random.randomSurname()), void 0 === d && (d = this.random.randomEmail(a, c)), e = b.createElement("tr"), f = b.createElement("td"), g = b.createElement("td"), h = b.createElement("td"), f.innerText = a + " " + c + " <" + d + ">", g.innerText = this.random.randomLorem(), h.innerText = this.random.randomLorem(), e.appendChild(f), e.appendChild(g), e.appendChild(h), e
  }, g.prototype.addElement = function(a) {
    this.elements.push(a), this.container.appendChild(a)
  }, g.prototype.insertRandomElements = function() {
    var a, b, c;
    for (a = f(1, 4), c = 0; a > c; c += 1) b = this.createEmail(), this.addElement(b);
    a % 2 === 0 && (b = this.createEmail(this.user.name, this.user.surname, this.user.email), this.addElement(b))
  }, g.prototype.removeRandomElements = function() {
    var a, b, c;
    if (a = f(1, 4), a < this.elements.length)
      for (b = this.elements.splice(0, a), c = 0; c < b.length; c += 1) this.container.removeChild(b[c])
  }, b.addEventListener("DOMContentLoaded", e)
}(window, document);