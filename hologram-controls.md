# Hologram controls
For player controls with items, attack holding the specific item to perform the action. Because of Bedrock, other player actions can also trigger the hologram control.
> [!WARNING]
> Player controls may be unreliable, but [armour stand controls](#armour-stand-controls) will always work.  
> Disabling the paper doll may help player controls to work.

Special thanks to **kizoku246** for the house in these images!

## Toggle rendering
Default: Brick

This will show/hide the hologram. Most player controls won't do anything while the hologram is hidden.  
![Toggling rendering](/assets/togglingRendering.gif)
## Change transparency
Default: Amethyst shard (sneak to decrease, stand to increase)

This will change the hologram opacity in 10% steps, going from 40% to 100%.  
![Changing transparency](/assets/changingTransparency.gif)
## Change layer
Default: Leather (sneak to decrease, stand to increase), or changing the pose on the armour stand

This will show a single layer and make everything else small, useful for building structures layer-by-layer.  
![Changing layer](/assets/changingLayer.gif)
## Move hologram
Default: Stick

Holograms can be moved around without moving the armour stand.  
![Moving hologram](/assets/movingHologram.gif)
## Rotate hologram
Default: Copper ingot

Standing will rotate the hologram 90° clockwise, and sneaking will rotate it 90° anticlockwise.  
![Rotating hologram](/assets/rotatingHologram.gif)
## Block validation
Default: Iron ingot

This will check if all blocks in the hologram are correct. It does not check air blocks, and cannot check block states. If the hologram is on a single layer, it will only validate that layer.  
![Validating structure](/assets/validatingStructure.gif)
## Material list
Default: Tab button (keyboard), book icon (touch)

This will show a UI overlay of the materials used in the hologram, as well as how many of each are needed. If multiple structures are in the same pack, the material lists will be merged together. Item icons may show the wrong item.  
![Material list](/assets/materialList.gif)
## Toggle overlay tint
Default: White dye

Similar to Litematica, this will show/hide an overlay colour on the hologram, useful for distinguishing what is real and what is part of the hologram. The colour and opacity of the tint can be changed on the pack creation website under _Settings > Textures_.  
![Toggle overlay tint](/assets/togglingTint.gif)
## Change layer mode
Default: Flint

This will switch between showing a single layer and showing all layers below, when on a specific layer.  
![Change layer mode](/assets/changingLayerMode.gif)
## Change structure
Default: Arrow, or hit armour stand that's holding nothing

If multiple structures are in the same pack, this will change between them. If you stand, it will go to the next structure; if you sneak, it will go to the previous structure.  
![Changing structure](/assets/changingStructure.gif)
## Save hologram settings
Default: Paper

This will make all armour stands save their settings and status for the next 30 seconds. This will happen automatically to armour stands >55 blocks away from the player. If an armour stand is unloaded while it is saving (indicated by particles on the armour stand), it will load its previous settings when it is reloaded. This will work if they are unloaded due to changing dimension, leaving the world, or simply going too far away.  There are a limited number of backup slots, which can be configured with the _Settings > Advanced > Backup slot count_ setting (default: 10).  

![Saving backup](/assets/savingBackup.gif)
## Armour stand controls
Default: Give item or hit

Due to player controls being unreliable, all player controls (with the exception of moving the hologram) can also be performed on the armour stand by giving it the corresponding item, and hitting it.  
![Armour stand controls](/assets/armourStandControls.gif)
## Disable player controls
Default: Bone

Armour stands holding bones will not respond to player controls. This allows you to select which armour stands respond to player controls.  
![Disabling player controls](/assets/disablingPlayerControls.gif)