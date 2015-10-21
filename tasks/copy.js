module.exports = {
  js: {
    expand: true,
    cwd: "src",
    src: ["**/*.js"],
    dest: "./<%= pkg.config.buildDir %>"
  },
  imgs: {
    expand: true,
    cwd: "src",
    src: ["**/*.jpg", "**/*.gif"],
    dest: "./<%= pkg.config.buildDir %>"
  }
}