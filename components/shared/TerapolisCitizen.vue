<template>
  <div class="mx-auto" :style="'width: ' + width + ';'">

    <svg class="d-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785 1628">
      <g fill="none" fill-rule="nonzero">
        <path v-if="backgroundColor" :fill="backgroundColor" d="M0 0h785.001v1628l-392.5-228.403L0 1628z"/>
        <g :fill="color">
          <path d="M393 376c-60.751 0-110-49.249-110-110s49.249-110 110-110 110 49.249 110 110-49.249 110-110 110zm0-30c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
          <path d="M408 561h-30V348h30z"/>
          <path d="M468 534h-70v-30h70v30zm-40-59h-30v-30h30v30z"/>
          <path d="M718 68.198H68v1439.536l325-188.368 325 188.368V68.198zM38 38h710v1521.969l-355-205.756L38 1559.97V38z"/>
          <path d="M378 1331V671h30v660z"/>
          <path d="M727.719 850.161L392.86 651 57.999 850.161l.2 33.817L392.86 685.689l333.327 198.289z"/>
          <path d="M727.719 1073.161L392.86 874 57.999 1073.161l.2 33.817L392.86 908.689l333.327 198.289z"/>
          <path d="M727.719 1295.161L392.86 1096 57.999 1295.161l.2 33.817 334.661-198.289 333.327 198.289z"/>
        </g>
      </g>
    </svg>

  </div>
</template>

<script>
  export default {
    props: [
      'backgroundColor',
      'color',
      'width'
    ]
  }
</script>

<style lang="stylus">
</style>
