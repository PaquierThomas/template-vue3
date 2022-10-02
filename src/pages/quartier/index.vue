<script>
import groupBy from "lodash/groupBy";
</script>

<Disclosure
    v-for="(listeQuartier, libelleCommune) in groupBy(
      data,
      'libelle_Commune'
    )"
    :key="libelleCommune"
  >

