# Geyser fix

Many Java-Bedrock crossplay servers use [Geyser](https://geysermc.org), a free and open-source proxy allowing Bedrock players to join Java servers. Most Geyser servers use [GeyserIntegratedPack](https://github.com/GeyserMC/GeyserIntegratedPack), a small resource pack which adds missing visual features to Bedrock.

However, GeyserIntegratedPack overrides the armour stand entity, meaning that HoloPrint packs using the armour stand will not work at all. Some other files are overwritten as well.

Fortunately, it is possible to circumvent this with a resource pack. This resource pack has the same UUID as GeyserIntegratedPack which tricks Minecraft Bedrock into not applying the real GeyserIntegratedPack. It contains all files from the real GeyserIntegratedPack except the ones that cause HoloPrint to break, ensuring minimal disruption.

Huge credit must go to [lightningimj](https://github.com/lightningimj) for [discovering this fix](https://github.com/SuperLlama88888/holoprint/issues/424). It is by far the most effective solution for this problem.

## Usage
1. **Check which version of GeyserIntegratedPack the server is using:** In Minecraft, go to _Settings_ > _Storage_ > _Cached Data_.
![Cached data in settings](/assets/storageSettingsCachedData.png)
2. Find and select `GeyserIntegratedPack`. If it is not there, the server is not using GeyserIntegratedPack and must be interfering with HoloPrint in some other way. In this case, please contact the server owners directly. **You must write down the version number at this step!**
![GeyserIntegratedPack in the cached data settings](/assets/cachedDataGeyserIntegratedPack.png)
> [!WARNING]
> Do not proceed past this step without writing down the version number of GeyserIntegratedPack!
3. Delete this pack.
![Deleting GeyserIntegratedPack](/assets/cachedDataGeyserIntegratedPackDelete.png)

![Confirming deletion](/assets/cachedDataGeyserIntegratedPackDeleteConfirmation.png)

4. Go to https://holoprint-mc.github.io/geyserfix, and find the version which matches your version of GeyserIntegratedPack that you wrote down earlier. If you can't find one for your version, first [check if GeyserIntegratedPack was updated within the last 24 hours](https://github.com/GeyserMC/GeyserIntegratedPack/commits). If so, the new version should be automatically generated soon. If not, please [create an issue](https://github.com/HoloPrint-MC/geyserfix/issues/new?title=No+release+for+version+1.x.x).

5. Download the required version, and import it into Minecraft. You can then enable it in your global resources, along with your HoloPrint packs. HoloPrint should then work fine inside your server!

> [!NOTE]
> During testing, I found that having it imported into Minecraft is sometimes enough to make HoloPrint packs work normally. However, it's best to enable it globally.