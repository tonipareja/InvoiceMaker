<template>
    <div class="container max-w-5xl mx-auto px-4 sm:px-6">
        <Navbar />
        <div id="card" class="max-w-2xl mx-auto my-24 shadow-2xl">
            <div id="pest" class="flex justify-between bg-verde px-6 py-2 text-grisaceo rounded-t-lg">
                <p>Crear factura</p>
                <p>Close</p>
            </div>
            <div id="bodyCard" class="flex justify-between px-6 py-8 bg-grisaceo rounded-b-lg">
                <form class="flex flex-col">
                    <h4 class="text-xl mb-4">Emisor</h4>
                    <input class="mb-4" type="text" placeholder="Nombre de la empresa">
                    <input class="mb-4" type="text" placeholder="CIF/NIF">
                    <input class="mb-4" type="text" placeholder="Dirección">
                    <input class="mb-4" type="text" placeholder="Localidad">
                    <input class="mb-4" type="text" placeholder="Código Postal">
                    <input class="mb-4" type="text" placeholder="Provincia">
                    <input class="mb-4" type="text" placeholder="País">
                </form>
                <form class="flex flex-col">
                    <h4 class="text-xl mb-4">Receptor</h4>
                    <input class="mb-4" type="text" placeholder="Nombre de la empresa">
                    <input class="mb-4" type="text" placeholder="CIF/NIF">
                    <input class="mb-4" type="text" placeholder="Dirección">
                    <input class="mb-4" type="text" placeholder="Localidad">
                    <input class="mb-4" type="text" placeholder="Código Postal">
                    <input class="mb-4" type="text" placeholder="Provincia">
                    <input class="mb-4" type="text" placeholder="País">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>