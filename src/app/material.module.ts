import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [ 
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        MatInputModule,
        MatSelectModule
    ]
})

export class MaterialModule {}