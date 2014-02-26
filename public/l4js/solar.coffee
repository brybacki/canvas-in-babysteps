class AstronomicalObject
  #mass relative to Earth, 1EM = 5.97 * 10e24 kg
  #dia km
  #dist in AU from SUN as semi-major axis  --  1AU = 149.6*10e6 km
  constructor: (options) ->
    {@name, @mass, @dia, @dst_min, @gravity} = options

  draw: (ctx, center) ->
    console.log 'drawing'+center[0]+' '+ center[1]

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(center[0], center[1], @dia/4000, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();


ao = (options) ->
  new AstronomicalObject(options)
#http://en.wikipedia.org/wiki/List_of_Solar_System_objects_by_size
#http://mail.colonial.net/~hkaiter/solarsysteminfo.html
#http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html
#http://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
class SolarSystem
  @objects = [
    ao({name: "Sun",    mass: 332837, dia: 696000,  dst_min: 0}),
    ao({name: "Mercury",mass: 0.0553, dia: 4879,    dst_min: 0.3}),
    ao({name: "Venus",  mass: 0.815,  dia: 12104,   dst_min: 0.7}),
    ao({name: "Earth",  mass: 1,      dia: 12756,   dst_min: 1}),
    ao({name: "Mars",   mass: 0.107,  dia: 6792,    dst_min: 1.4}),
    ao({name: "Jupiter",mass: 317.8,  dia: 142984,  dst_min: 4.9}),
    ao({name: "Saturn", mass: 95.2,   dia: 120536,  dst_min: 9}),
    ao({name: "Uranus", mass: 14.5,   dia: 51118,   dst_min: 18.3}),
    ao({name: "Neptune",mass: 17.1,   dia: 49528,   dst_min: 29.8}),

  ]
