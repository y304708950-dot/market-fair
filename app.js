// 全国市集活动数据
const markets = [
    {
        id: 1,
        name: "周末农夫市集 - 有机生活",
        province: "上海",
        city: "上海市",
        district: "徐汇区",
        address: "徐汇区复兴西路188号",
        startDate: "2026-05-31",
        endDate: "2026-06-01",
        time: "09:00 - 17:00",
        category: "农夫市集",
        description: "汇集本地有机农场直供的新鲜蔬果、手工奶酪、有机面包等健康食品。",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "复古怀旧跳蚤市场",
        province: "北京",
        city: "北京市",
        district: "朝阳区",
        address: "朝阳公园南门广场",
        startDate: "2026-06-07",
        endDate: "2026-06-08",
        time: "10:00 - 18:00",
        category: "复古市集",
        description: "古董家具、老唱片、黑胶、复古服饰、老式相机，带你穿越时光。",
        image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "西湖创意手作市集",
        province: "浙江",
        city: "杭州市",
        district: "上城区",
        address: "西湖天地广场",
        startDate: "2026-06-14",
        endDate: "2026-06-15",
        time: "11:00 - 20:00",
        category: "创意市集",
        description: "独立设计师手作饰品、皮具、陶瓷、插画作品，发现原创之美。",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "夏日美食嘉年华",
        province: "广东",
        city: "广州市",
        district: "天河区",
        address: "花城汇广场",
        startDate: "2026-06-01",
        endDate: "2026-06-30",
        time: "16:00 - 23:00",
        category: "美食市集",
        description: "汇集各地特色小吃、网红美食、精酿啤酒，夏日夜宵好去处。",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "成都有机生活市集",
        province: "四川",
        city: "成都市",
        district: "锦江区",
        address: "太古里东广场",
        startDate: "2026-06-21",
        endDate: "2026-06-22",
        time: "10:00 - 19:00",
        category: "农夫市集",
        description: "四川本地有机农产品、手工艺品、环保生活用品，倡导绿色生活。",
        image: "https://images.unsplash.com/photo-1489450278009-822e9be04dff?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "深圳创意设计周",
        province: "广东",
        city: "深圳市",
        district: "南山区",
        address: "华侨城创意文化园",
        startDate: "2026-06-10",
        endDate: "2026-06-16",
        time: "10:00 - 21:00",
        category: "创意市集",
        description: "汇聚国内外独立设计师品牌，展示最新创意设计作品和潮流趋势。",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "南京复古集市",
        province: "江苏",
        city: "南京市",
        district: "秦淮区",
        address: "老门东历史街区",
        startDate: "2026-06-07",
        endDate: "2026-06-08",
        time: "14:00 - 21:00",
        category: "复古市集",
        description: "民国老物件、古籍善本、传统手工艺品，感受六朝古都的韵味。",
        image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "重庆火锅美食节",
        province: "重庆",
        city: "重庆市",
        district: "渝中区",
        address: "解放碑步行街",
        startDate: "2026-06-15",
        endDate: "2026-06-22",
        time: "17:00 - 23:00",
        category: "美食市集",
        description: "正宗重庆火锅、特色小面、江湖菜，体验最地道的山城美食文化。",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "厦门海岛农夫市集",
        province: "福建",
        city: "厦门市",
        district: "思明区",
        address: "沙坡尾艺术西区",
        startDate: "2026-06-28",
        endDate: "2026-06-29",
        time: "09:00 - 18:00",
        category: "农夫市集",
        description: "新鲜海产、热带水果、闽南特产，感受海岛风情的市集文化。",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "西安丝绸之路市集",
        province: "陕西",
        city: "西安市",
        district: "碑林区",
        address: "大唐不夜城",
        startDate: "2026-06-20",
        endDate: "2026-06-27",
        time: "16:00 - 23:00",
        category: "创意市集",
        description: "丝路沿线国家特色手工艺品、非遗文创、异域美食，体验千年商路文化。",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "武汉樱花季市集",
        province: "湖北",
        city: "武汉市",
        district: "武昌区",
        address: "东湖绿道",
        startDate: "2026-03-20",
        endDate: "2026-04-10",
        time: "10:00 - 18:00",
        category: "农夫市集",
        description: "春季限定市集，樱花主题手作、本地农产品、春日野餐食材。",
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "长沙夜市美食嘉年华",
        province: "湖南",
        city: "长沙市",
        district: "天心区",
        address: "太平老街",
        startDate: "2026-06-01",
        endDate: "2026-08-31",
        time: "18:00 - 02:00",
        category: "美食市集",
        description: "臭豆腐、糖油粑粑、小龙虾，体验最地道的长沙夜市文化。",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    }
];

// 状态管理
let filters = {
    keyword: "",
    province: "",
    city: "",
    category: "",
    dateRange: ""
};

// DOM 元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const provinceSelect = document.getElementById('province-select');
const citySelect = document.getElementById('city-select');
const categorySelect = document.getElementById('category-select');
const dateSelect = document.getElementById('date-select');
const resetBtn = document.getElementById('reset-btn');
const marketGrid = document.getElementById('market-grid');
const noResults = document.getElementById('no-results');
const viewAllBtn = document.getElementById('view-all-btn');
const resultCount = document.getElementById('result-count');
const activeFilters = document.getElementById('active-filters');
const totalMarkets = document.getElementById('total-markets');
const totalCities = document.getElementById('total-cities');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initStats();
    initFilters();
    renderMarkets(markets);
    setupEventListeners();
});

// 初始化统计
function initStats() {
    totalMarkets.textContent = markets.length;
    const cities = [...new Set(markets.map(m => m.city))];
    totalCities.textContent = cities.length;
}

// 初始化筛选器
function initFilters() {
    const provinces = [...new Set(markets.map(m => m.province))].sort();
    provinces.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        provinceSelect.appendChild(opt);
    });
}

// 更新城市选项
function updateCityOptions() {
    citySelect.innerHTML = '<option value="">全部城市</option>';
    
    if (!filters.province) {
        citySelect.disabled = true;
        return;
    }
    
    citySelect.disabled = false;
    const cities = [...new Set(markets
        .filter(m => m.province === filters.province)
        .map(m => m.city))].sort();
    
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        citySelect.appendChild(opt);
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索
    searchBtn.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
    
    // 筛选器
    provinceSelect.addEventListener('change', (e) => {
        filters.province = e.target.value;
        filters.city = "";
        updateCityOptions();
        applyFilters();
    });
    
    citySelect.addEventListener('change', (e) => {
        filters.city = e.target.value;
        applyFilters();
    });
    
    categorySelect.addEventListener('change', (e) => {
        filters.category = e.target.value;
        applyFilters();
    });
    
    dateSelect.addEventListener('change', (e) => {
        filters.dateRange = e.target.value;
        applyFilters();
    });
    
    // 重置
    resetBtn.addEventListener('click', resetFilters);
    viewAllBtn.addEventListener('click', resetFilters);
    
    // 底部链接
    document.getElementById('footer-home').addEventListener('click', (e) => {
        e.preventDefault();
        resetFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            categorySelect.value = category;
            filters.category = category;
            applyFilters();
            document.querySelector('.filters').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// 重置筛选
function resetFilters() {
    filters = {
        keyword: "",
        province: "",
        city: "",
        category: "",
        dateRange: ""
    };
    
    searchInput.value = "";
    provinceSelect.value = "";
    citySelect.value = "";
    citySelect.disabled = true;
    categorySelect.value = "";
    dateSelect.value = "";
    
    renderMarkets(markets);
    updateActiveFilters();
}

// 应用筛选
function applyFilters() {
    filters.keyword = searchInput.value.toLowerCase().trim();
    
    const filtered = markets.filter(m => {
        // 关键词搜索
        const matchKeyword = !filters.keyword || 
            m.name.toLowerCase().includes(filters.keyword) ||
            m.address.toLowerCase().includes(filters.keyword) ||
            m.description.toLowerCase().includes(filters.keyword) ||
            m.city.toLowerCase().includes(filters.keyword) ||
            m.district.toLowerCase().includes(filters.keyword);
        
        // 地区筛选
        const matchProvince = !filters.province || m.province === filters.province;
        const matchCity = !filters.city || m.city === filters.city;
        
        // 类型筛选
        const matchCategory = !filters.category || m.category === filters.category;
        
        // 日期筛选
        let matchDate = true;
        if (filters.dateRange) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const marketStart = new Date(m.startDate);
            const marketEnd = new Date(m.endDate);
            
            switch (filters.dateRange) {
                case 'today':
                    matchDate = marketStart <= today && marketEnd >= today;
                    break;
                case 'weekend':
                    const thisSaturday = new Date(today);
                    thisSaturday.setDate(today.getDate() + (6 - today.getDay()));
                    const thisSunday = new Date(thisSaturday);
                    thisSunday.setDate(thisSaturday.getDate() + 1);
                    matchDate = marketStart <= thisSunday && marketEnd >= thisSaturday;
                    break;
                case 'month':
                    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                    matchDate = marketStart <= monthEnd && marketEnd >= monthStart;
                    break;
                case 'next-month':
                    const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
                    const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);
                    matchDate = marketStart <= nextMonthEnd && marketEnd >= nextMonthStart;
                    break;
            }
        }
        
        return matchKeyword && matchProvince && matchCity && matchCategory && matchDate;
    });
    
    renderMarkets(filtered);
    updateActiveFilters();
}

// 更新活跃筛选标签
function updateActiveFilters() {
    activeFilters.innerHTML = '';
    
    if (filters.keyword) {
        addFilterTag(`关键词: ${filters.keyword}`, () => {
            searchInput.value = '';
            filters.keyword = '';
            applyFilters();
        });
    }
    
    if (filters.province) {
        addFilterTag(filters.province, () => {
            provinceSelect.value = '';
            filters.province = '';
            filters.city = '';
            updateCityOptions();
            applyFilters();
        });
    }
    
    if (filters.city) {
        addFilterTag(filters.city, () => {
            citySelect.value = '';
            filters.city = '';
            applyFilters();
        });
    }
    
    if (filters.category) {
        addFilterTag(filters.category, () => {
            categorySelect.value = '';
            filters.category = '';
            applyFilters();
        });
    }
    
    if (filters.dateRange) {
        const dateLabels = {
            'today': '今天',
            'weekend': '本周末',
            'month': '本月',
            'next-month': '下个月'
        };
        addFilterTag(dateLabels[filters.dateRange], () => {
            dateSelect.value = '';
            filters.dateRange = '';
            applyFilters();
        });
    }
}

// 添加筛选标签
function addFilterTag(text, onRemove) {
    const tag = document.createElement('span');
    tag.className = 'filter-tag';
    tag.innerHTML = `${text} <span class="remove-filter">×</span>`;
    tag.querySelector('.remove-filter').addEventListener('click', onRemove);
    activeFilters.appendChild(tag);
}

// 渲染市集列表
function renderMarkets(data) {
    marketGrid.innerHTML = '';
    resultCount.textContent = data.length;
    
    if (data.length === 0) {
        noResults.style.display = 'block';
        marketGrid.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    marketGrid.style.display = 'grid';
    
    // 按开始日期排序
    data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    
    data.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const dateText = formatDateRange(m.startDate, m.endDate);
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${m.image}')">
                <div class="card-date">${dateText}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${m.name}</h3>
                <div class="card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${m.city} ${m.district}
                </div>
                <p class="card-description">${m.description}</p>
                <div class="card-footer">
                    <div class="card-tags">
                        <span class="tag">${m.category}</span>
                    </div>
                    <span class="card-time">${m.time}</span>
                </div>
            </div>
        `;
        
        marketGrid.appendChild(card);
    });
}

// 格式化日期范围
function formatDateRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    const formatDate = (date) => {
        return `${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    };
    
    if (start === end) {
        return formatDate(startDate);
    }
    
    // 同月
    if (startDate.getMonth() === endDate.getMonth()) {
        return `${formatDate(startDate)} - ${endDate.getDate().toString().padStart(2, '0')}`;
    }
    
    // 跨月
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 搜索输入防抖
searchInput.addEventListener('input', debounce(() => {
    if (searchInput.value.length >= 2 || searchInput.value.length === 0) {
        applyFilters();
    }
}, 300));