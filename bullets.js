AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key == "f") {
        let bullet = document.createElement("a-entity");
        bullet.setAttribute("geometry", { primitive: "sphere", radius: 0.1 });
        bullet.setAttribute("material", { color: "black" });

        let camera = document.querySelector("#camera");
        let position = camera.getAttribute("position");
        bullet.setAttribute("position", position);

        let new_camera = document.querySelector("#camera").object3D;
        let direction = new THREE.Vector3();
        new_camera.getWorldDirection(direction);
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        let scene = document.querySelector("#scene");
        scene.appendChild(bullet);
      }
    });
  },
});
