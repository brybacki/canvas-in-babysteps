window.AstronomicalObject = class AstronomicalObject
  #mass relative to Earth, 1EM = 5.97 * 10e24 kg
  #dia km
  #dist in AU from SUN as semi-major axis  --  1AU = 149.6*10e6 km
  @scale: 1 / 4000
  @AU: 149600000

  constructor: (options) ->
    {@name, @mass, @dia, @dst, @color, @gravity} = options

  draw: (ctx, center) ->
    distance = @dst_scaled()

    ctx.fillStyle = @color;
    ctx.beginPath();
    ctx.arc(center[0] + distance, center[1], @radius_scaled() , 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "gray";
    ctx.font = '10px  Sego UI';
    ctx.fillText(@name, center[0] + distance, center[1]+10);


  dst_scaled: ->
    @dst * AstronomicalObject.AU * AstronomicalObject.scale / 100

  radius_scaled: ->
    @dia * AstronomicalObject.scale / 2.0

ao = (options) ->
  new AstronomicalObject(options)
#http://en.wikipedia.org/wiki/List_of_Solar_System_objects_by_size
#http://mail.colonial.net/~hkaiter/solarsysteminfo.html
#http://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html
#http://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
window.SolarSystem = [
  ao({name: "Sun", mass: 332837, dia: 696000, dst: 0, color: 'yellow'}),
  ao({name: "Mercury", mass: 0.0553, dia: 4879, dst: 0.387, color: 'orange'}),
  ao({name: "Venus", mass: 0.815, dia: 12104, dst: 0.723, color: 'yellow'}),
  ao({name: "Earth", mass: 1, dia: 12756, dst: 1, color: 'blue'}),
  ao({name: "Mars", mass: 0.107, dia: 6792, dst: 1.52, color: 'red'}),
  ao({name: "Jupiter", mass: 317.8, dia: 142984, dst: 5.2, color: 'red'}),
  ao({name: "Saturn", mass: 95.2, dia: 120536, dst: 9.58, color: 'yellow'}),
  ao({name: "Uranus", mass: 14.5, dia: 51118, dst: 19.2, color: 'green'}),
  ao({name: "Neptune", mass: 17.1, dia: 49528, dst: 30.05, color: 'blue'}),

]
