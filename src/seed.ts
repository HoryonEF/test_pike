import { Folder } from './model/folder.model';

const createNewFolder = async () => {
    const newFolder = new Folder({
        name: 'Pasta de Exemplo',
    });

    try {
        const result = await newFolder.save();
        console.log('Nova pasta criada:', result);
    } catch (error) {
        console.error('Erro ao criar nova pasta:', error);
    }
};

createNewFolder();
