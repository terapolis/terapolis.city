<template>
  <div class="mx-auto" :style="'width: ' + width + ';'">

    <svg class="d-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785 1628">
      <g fill="none" fill-rule="nonzero">
        <path v-if="backgroundColor" :fill="backgroundColor" d="M0 0h785.001v1628l-392.5-228.403L0 1628z"/>
        <g :fill="color">
          <path d="M68 68h650v1440.077l-325-187.13-325 187.13V68zm680-30H38v1521.969l355-204.404 355 204.404V38z"/>
          <path d="M378 1351h30V718h-30z"/>
          <path d="M50.281 1295.161L392.421 1098l327.58 190.161-.2 33.817-327.51-189.289-340.478 196.289-1.532-33.817zM408 45h-30v481h30V45zm78.722 608l-15.099 25.923 267.579 155.854-2.008-35.888L486.722 653z"/>
          <path d="M521.239 179h-30v299.598L605 412.324v706.264l30 18V361.085l-113.761 65.274V179zM264 179h30v299.598l-113.76-66.274v706.264l-30 18V361.085L264 426.359V179z"/>
          <path d="M294.102 656l15.1 25.923L41.621 837.777l2.008-35.888z"/>
          <path d="M393 730c60.751 0 110-49.249 110-110s-49.249-110-110-110-110 49.249-110 110 49.249 110 110 110zm0-30c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z"/>
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
