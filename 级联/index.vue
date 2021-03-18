                  <div class="catalog">
                                    <div  :class="'catalog-item catalog-'+ menusIndex"  v-for="(menusItem, menusIndex) in menus">
                                        <div v-if="menusItem && menusItem.length" class="catalog-item-title">
                                            <h2>{{convertToChinese(menusIndex + 1)}}级目录：</h2>
                                        </div>
                                            <ul class="catalog-item-ul" >
                                                <template v-for="(subItem,subIndex) in menusItem">
                                                    <div class="catalog-item-left">
                                                        <#--&& subItem.active !== 'false'-->
                                                        <li :key="subItem.value"
                                                            :class="{activeLi:activeCatalog[menusIndex]===subIndex ,hiddenLi:subIndex>=8}"
                                                            @click="handleClick($event,menusItem,subIndex,menusIndex,menusIndex+1,subItem, subItem.children)" >
                                                            <el-tooltip class="item" effect="dark" :content="subItem.label" placement="top">
                                                                <span>{{subItem.label}}</span>
                                                            </el-tooltip>
                                                            <i v-show="subItem.children" class="demo-icon uex-icon-arrow-down"></i>
                                                        </li>
                                                    </div>
                                                    <div v-if="subIndex === menusItem.length-1" class="catalog-item-right">
                                                        <div class="catalog-item-right-box" :ref="'more'+menusIndex+subIndex"  v-for="fold in subItem.isfoldData"  @click="handelMore(fold,subItem,subIndex,menusItem, menusIndex)" >
                                                            <div v-show="fold.show">
                                                                <span>展开</span>
                                                                <i class="demo-icon uex-icon-arrow-down fold-icon" ></i>
                                                            </div>
                                                            <div v-show="!fold.show">
                                                                <span>折叠</span>
                                                                <i class="demo-icon uex-icon-arrow-up fold-icon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </ul>
                                </div>
                                <div class="catalog-item select-item" v-show="breadcrumb.length>0">
                                    <div class="catalog-item-title">
                                        <h2>选中目录：</h2>
                                    </div>
                                    <ul class="catalog-item-ul breadcrumb-ul">
                                        <#--@click="handelBreadcrumb(type,index)"-->
                                        <li v-for="(type,index) in breadcrumb" @click="handelBreadcrumb(type,index)">
                                            <span :class="{lastSpan:index === breadcrumb.length-1}">{{type.label}}</span>
                                            <i class="demo-icon uex-icon-arrow-left breadcrumb-left" v-show="index!==breadcrumb.length-1"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>

