from Crypto.PublicKey import RSA
from extensions.ext_storage import storage

def generate_key_pair(tenant_id):
    private_key = RSA.generate(2048)
    public_key = private_key.publickey()

    pem_private = private_key.export_key()
    pem_public = public_key.export_key()

    filepath = "privkeys/{tenant_id}".format(tenant_id=tenant_id) + "/private.pem"
    storage.save(filepath, pem_private)

    return pem_public.decode()

generate_key_pair("6346ab60-04ff-46b2-8a61-ffa4bee1fcba")