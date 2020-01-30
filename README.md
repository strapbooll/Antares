# Antares - Upload de imagens
## Guardar imagens no Bucket da AWS S3

O Antares utiliza MongoDB para guardar os dados das imagens Salvas.

#### Backend

As configurações do banco de dados e S3 se encontram no arquivo .env:
* APP_URL= "URL onde a aplicação está hospedada"
* STORAGE_TYPE= "S3"
* MONGO_URL= "string de conexão fornecida pelo MongoDB"
* AWS_ACCESS_KEY_ID="ID da chave de acesso do S3"
* AWS_SECRET_ACCESS_KEY="Chave de acesso secreta do S3"
* AWS_DEFAULT_REGION="Região do Bucket"

#### Regras
* Tamanho máximo da imagem 2 MB